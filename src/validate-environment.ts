import * as assert from 'assert';
import * as dotenv from 'dotenv';
dotenv.config();

/*{
  //AWS_ACCESS_KEY_ID = '',
  // AWS_SECRET_ACCESS_KEY = '',
  //DATABASE_URL = '',
  //EMAIL_ADDRESS = '',
  // POSTGRES_DB = '',
  // POSTGRES_USER = '',
  // PRIVATE_KEY = '',
  // PUBLIC_KEY = '',
  DB_TYPE,
      DB_HOST,
      DB_PORT,
      DB_DATABASE,
      DB_USERNAME,
      DB_PASSWORD,
      DB_SYNCHRONIZE,
      DB_LOGGING,
      APP_PORT,
      APP_ENV,
}*/


export function validateEnvironment() {
  /*assert.notStrictEqual(
    AWS_ACCESS_KEY_ID,
    'CHANGEME',
    'AWS_ACCESS_KEY_ID is not set.',
  );*/
  /*assert.notStrictEqual(
    AWS_ACCESS_KEY_ID,
    '',
    'AWS_ACCESS_KEY_ID is set to the example value and will not work.',
  );*/
  /*assert.notStrictEqual(
    AWS_SECRET_ACCESS_KEY,
    '',
    'AWS_SECRET_ACCESS_KEY is not set.',
  );*/
  /*assert.notStrictEqual(
    AWS_SECRET_ACCESS_KEY,
    'CHANGEME',
    'AWS_ACCESS_KEY_ID is set to the example value and will not work',
  );*/
  //assert.notStrictEqual(EMAIL_ADDRESS, '', 'EMAIL_ADDRESS is not set.');
  /*assert.notStrictEqual(
    EMAIL_ADDRESS,
    'CHANGEME',
    'EMAIL_ADDRESS is set to default example value and will not work.',
  );*/
  //assert.notStrictEqual(PRIVATE_KEY, '', 'PRIVATE_KEY is not set.');
 // assert.notStrictEqual(PUBLIC_KEY, '', 'PUBLIC_KEY is not set.');

  assert.notStrictEqual(process.env.DB_TYPE, '', 'Database Type is not set.');
  assert.notStrictEqual(process.env.DB_HOST, '', 'Database Host is not set.');
  assert.notStrictEqual(process.env.DB_PORT, '', 'Database Port is not set.');
  assert.notStrictEqual(process.env.DB_DATABASE, '', 'Database is not set.');
  assert.notStrictEqual(process.env.DB_USERNAME, '', 'Database Username is not set.');
  assert.notStrictEqual(process.env.DB_PASSWORD,'Database password is not set.');
  assert.notStrictEqual(process.env.DB_SYNCHRONIZE, '', 'Database Sync is not set.');
  assert.notStrictEqual(process.env.DB_LOGGING, 'Database Logging is not set.');
  assert.notStrictEqual(process.env.APP_PORT, '', 'App port is not set.');
  assert.notStrictEqual(process.env.APP_ENV, '', 'App ENV is not set.');

}
