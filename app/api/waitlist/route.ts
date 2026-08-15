import { google } from 'googleapis';
import { NextResponse } from 'next/server';

const emailPattern = /^\S+@\S+\.\S+$/;

function configuredEnvironment() {
  const spreadsheetId = process.env.GOOGLE_SHEETS_SPREADSHEET_ID;
  const clientEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
  const privateKey = process.env.GOOGLE_SERVICE_ACCOUNT_PRIVATE_KEY?.replace(/\\n/g, '\n');

  if (!spreadsheetId || !clientEmail || !privateKey) return null;
  return { spreadsheetId, clientEmail, privateKey };
}

export async function POST(request: Request) {
  let email: unknown;

  try {
    ({ email } = await request.json());
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  if (typeof email !== 'string' || !emailPattern.test(email)) {
    return NextResponse.json({ error: 'Enter a valid email address.' }, { status: 400 });
  }

  const environment = configuredEnvironment();
  if (!environment) {
    console.error('Google Sheets waitlist credentials are not configured.');
    return NextResponse.json({ error: 'Waitlist is not configured.' }, { status: 503 });
  }

  const auth = new google.auth.JWT({
    email: environment.clientEmail,
    key: environment.privateKey,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  const sheets = google.sheets({ version: 'v4', auth });

  try {
    await sheets.spreadsheets.values.append({
      spreadsheetId: environment.spreadsheetId,
      range: `${process.env.GOOGLE_SHEETS_WAITLIST_TAB ?? 'Waitlist'}!A:B`,
      valueInputOption: 'RAW',
      requestBody: { values: [[email.trim().toLowerCase(), new Date().toISOString()]] },
    });
  } catch (error) {
    console.error('Failed to append waitlist email to Google Sheets.', error);
    return NextResponse.json({ error: 'Could not save email.' }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}
