import googleapi from './lib/googleapi';

const auth = googleapi.authorize();

export default {
  scraper: async (frequency) => {
    const files = await googleapi.getFileList(auth);
    const data = await googleapi.getData(auth, files.data.files, frequency);
    return data;
  },
};
