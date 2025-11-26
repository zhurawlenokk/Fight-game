import type { ApiCharacters } from '../../types.ts';

export default class ApiFetch {
    private apiEndpoint = 'https://pprint.spb.ru/api/fighters/';

    getCharactersList(): ApiCharacters[] | null {
        let list: ApiCharacters[] = [];
        try {
            const request = new XMLHttpRequest();
            request.open('GET', this.apiEndpoint, false);
            request.send();

            if (request.status === 200) {
                return JSON.parse(request.responseText);
            }
            return null;
        } catch (e) {
            console.error('ERROR ', e);
        }

        return list;
    }
}
