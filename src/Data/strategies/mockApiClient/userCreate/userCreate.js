import { generateRandomInteger } from '../helpers.js';
const primaryCampaignId = generateRandomInteger();
export default {
  id: generateRandomInteger(),
  username: 'test@gmail.com',
  firstName: 'Luis',
  lastName: 'Felipe',
  imageFileId: null,
  imageFileUrl: null,
  defaultCampaignId: primaryCampaignId, //what is this is the same with primary campaign id?
  defaultCampaignModeId: null,
  activeTimeLogId: null,
  metadata: null,
};
