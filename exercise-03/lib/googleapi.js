import { google } from 'googleapis';

// If modifying these scopes, delete token.json.
const SCOPES = [
  'https://www.googleapis.com/auth/drive.metadata.readonly',
  'https://www.googleapis.com/auth/spreadsheets.readonly',
];
// The file token.json stores the user's access and refresh tokens, and is
// created automatically when the authorization flow completes for the first
// time.
const CREDENTIALS = 'credentials.json';

// Load client secrets from a local file.
// fs.readFile('credentials.json', (err, content) => {
//   if (err) return console.log('Error loading client secret file:', err);
//   // Authorize a client with credentials, then call the Google Drive API.
//   authorize(JSON.parse(content), listFiles);
// });

const googleapi = {
/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
  authorize: () => {
    const auth = new google.auth.JWT({
      keyFile: CREDENTIALS,
      scopes: SCOPES,
    });
    return auth;
  },

  getFileList: async (auth) => {
    const drive = google.drive({ version: 'v3', auth });
    return drive.files.list({
      fields: 'files(id, name)',
      q: "'1J4m7lZamB9Mxnx7V9UNZHVIct34WVROd' in parents",
    });
  },

  getData: async (auth, files, frequency) => {
    const sheets = google.sheets({ version: 'v4', auth });
    const dataValues = await Promise.all(files.map(async (file) => {
      const { data } = await sheets.spreadsheets.values.get({
        spreadsheetId: file.id,
        range: `${frequency}!A4:BQ`,
        valueRenderOption: 'FORMULA',
      });
      return data.values;
    }));

    return dataValues;
  },
};

export default googleapi;
