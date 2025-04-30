import userAuthData from './userAuth/userAuth.js';
import userRead from './userRead/userRead.js';
import userRecoveryCreate from './userRecoveryCreate/userRecoveryCreate.js';
import userCreate from './userCreate/userCreate.js';
import userUpdate from './userUpdate/userUpdate.js';
import userPasswordUpdate from './userPasswordUpdate/userPasswordUpdate.js';
import userCampaignModeList from './userCampignModeList/userCampaignModeList.js';
import userCampaignModeCreate from './userCampaignModeCreate/userCampaignModeCreate.js';
import userCurrentDataRead from './userCurrentDataRead/userCurrentDataRead.js';
import campaignUserList from './campaignUserList/campaignUserList.js';
import campaignRoleAndPermissionGroupList from './campaignRoleAndPermissionGroupList/campaignRoleAndPermissionGroupList.js';

export default {
  async userAuth({ username, password }, token) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (username === 'anonymous@kizansolutions.com' && password === '123456') {
      return userAuthData.anonymous;
    } else if (username === 'user@kizansolutions.com' && password === '123456') {
      return userAuthData.user;
    } else if (token) {
      return userAuthData.user;
    }
    throw new Error('Invalid parameters');
  },

  async userRead({}, token) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (!token) throw new Error('Invalid token');
    return userRead;
  },

  async userRecoveryCreate({ username }, token) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (!username) throw new Error('Invalid username');
    return userRecoveryCreate;
  },

  async userCreate({ username, password, firstName, lastName }, token) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (!username || !password) throw new Error('Invalid username or password');
    return { ...userCreate, username: username, firstName: firstName, lastName: lastName };
  },

  //How do secure update
  async userUpdate({ firstName, lastName, imageFileId, defaultCampaignModeId, writeNulls = 0 }, token) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (!token) throw new Error('Invalid token');
    return {
      ...userUpdate,
      firstName: firstName,
      lastName: lastName,
      imageFileId: imageFileId,
      defaultCampaignModeId: defaultCampaignModeId,
    };
  },

  async userPasswordUpdate({ username, passwordOld, passwordNew, userRecoveryUuid }, token) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (passwordNew && userRecoveryUuid) return userPasswordUpdate;
    if ((username && passwordOld && passwordNew, token)) return userPasswordUpdate;
    throw new Error('Invalid update password parameters');
  },

  async userCampaignModeList({}, token) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (!token) throw new Error('Invalid token');
    return userCampaignModeList;
  },

  async userCampaignModeCreate({ campaignModeName, campaignIdCsv }, token) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (!campaignModeName || !campaignIdCsv) throw new Error('Invalid parameters');
    if (!token) throw new Error('Invalid token');
    return { ...userCampaignModeCreate, campaignModeName: campaignModeName, campaignIdCsv: campaignIdCsv };
  },

  async userCurrentDataRead({}, token) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (!token) throw new Error('Invalid token');
    return userCurrentDataRead;
  },

  async campaignUserList(
    {
      campaignId,
      searchString,
      roleIdCsv,
      includeInactiveCampaignUsers,
      includeInactiveRoles,
      rowCountSkip,
      rowCountTake,
      orderBy,
    },
    token
  ) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (!token) throw new Error('Invalid token');
    if (!campaignId) throw new Error('Invalid campaignId');
    return campaignUserList;
  },

  async campaignRoleAndPermissionGroupList(
    { campaignId, searchString, roleIdCsv, permissionGroupIdCsv, rowCountSkip, rowCountTake, orderBy },
    token
  ) {
    await new Promise(resolve => setTimeout(resolve, 1000));
    if (!token) throw new Error('Invalid token');
    if (!campaignId) throw new Error('Invalid campaignId');
    return campaignRoleAndPermissionGroupList;
  },
};
