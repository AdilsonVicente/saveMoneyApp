/* eslint-disable prettier/prettier */
import Realm from 'realm';
import CategorySchemas from '../schemas/CategorySchemas';
import EntrySchemas from '../schemas/EntrySchemas';

import {getDefaultCategories} from './Categories';
// import { cleanInitialized } from './Welcome';

export const getRealm = async () => {
  const realm = await Realm.open({
    schema: [CategorySchemas, EntrySchemas],
    schemaVersion: 4,
  });

  // dropDB(realm);
  // cleanInitialized();
  initDB(realm);

  return realm;
};

export const initDB = (realm) => {
  console.log(`initDB :: Categories length: ${categoriesLength}`);
  const categoriesLength = realm.objects('Category').length;

  if (categoriesLength === 0) {
    const categories = getDefaultCategories();

    try {
      realm.write(() => {
        categories.array.forEach(category => {
          console.log(`initDB :: creating category: ${JSON.stringify(category)}`);

          realm.create('Category', category, true);
        });

      });
    } catch (error) {

    }
  } else {
    console.log('initDB :: categories already existing...Skypping');
  }
};

export const dropDB = realm => {
  console.log('dropDB :: dropping db...');
  realm.write(() => {
    realm.deleteAll();
  });
};
