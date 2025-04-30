import moment from 'moment';

const decodeModulePermissions = str => {
  let modulePermissions = [];
  let arr = str.split('|');
  for (let p of arr) {
    let aux = p.split(',');
    for (let i = 1; i < aux.length; i++) {
      modulePermissions.push(`${aux[0]}.${aux[i]}`);
    }
  }
  return modulePermissions;
};

const decompression = data => {
  const payload = {
    id: data.u,
    campaigns: [],
    expTimestamp: data.exp,
    expDate: moment.unix(data.exp).format('YYYY/MM/DD HH:mm:ss'),
    lts: data.lts,
    appId: data.a,
    appVersion: data.appv,
  };

  let campaignIndex = 0;
  let aux_c = 0;

  const modulePermissions = decodeModulePermissions(data.p);

  for (let c of data.c) {
    payload.campaigns[campaignIndex] = {
      id: aux_c + c,
      primary: data.uc == campaignIndex ? true : false,
      owner: data.oc.includes(campaignIndex) ? true : false,
      permissions: [],
    };
    for (let cp of data.cp[campaignIndex]) {
      payload.campaigns[campaignIndex].permissions.push(modulePermissions[cp]);
    }
    aux_c = aux_c + c;
    campaignIndex += 1;
  }
  return payload;
};

export default decompression;
