import { supabase } from '../Config/supabase.config.js';

export default class ProfilesModel {
    // GET ALL
    static async getAllRecords() {
        try {
            const { data, error } = await supabase
                .from('profiles')
                .select('id, firstname, middlename, lastname, address, zip, city, country')
            if (error) {
                throw new Error(error);
            } else {
                return data
            }

        } catch (error) {
            console.error(`Fejl i kald af profiler liste i getAllRecords: ${error}`);
        }
    }
    // GET BY ID
    static async getRecordByID(id) {
        try {
            const { data, error } = await supabase
                .from('profiles')
                .select('id, firstname, middlename, lastname, address, zip, city, country')
                .eq('id', id)

            if (error) {
                throw new Error(error)
            } else {
                return data
            }

        } catch (error) {
            console.error(`Fejl i kald af profiler i getRecordByID: ${error}`);
        }

    }
    // CREATE
    static async createRecord(formdata) {
        try {
            const { data, error } = await supabase
                .from('profiles')
                .select([{
                    id: formdata.id,
                    firstname: formdata.firstname,
                    middlename: formdata.middlename,
                    lastname: formdata.lastname,
                    address: formdata.address,
                    zip: formdata.zip,
                    city: formdata.city,
                    country: formdata.country
                }
                ])
            if (error) {
                throw new Error(error)
            } else {
                return data
            }
        } catch (error) {
            console.error(`fejl in create in ProfilesModel: ${error}`);
        }
    }
    // UPDATE
    static async updateRecord(formdata) {
        // Function scope
        let { data, error } = await supabase
            .from('profiles')
            .update([
                {
                    id: formdata.id,
                    firstname: formdata.firstname,
                    middlename: formdata.middlename,
                    lastname: formdata.lastname,
                    address: formdata.address,
                    zip: formdata.zip,
                    city: formdata.city,
                    country: formdata.country
                }
            ])
            .eq('id', formdata.id)
        if (error) {
            throw new Error(error.message);
        }
        return data
    } catch(error) {
        console.error(`error in update in ProfilesModel ${error}`);
    }
    // DELETE SONG
    static async deleteRecord(formdata) {
        // Function scope
        let { data, error } = await supabase
            .from('profiles')
            .delete()
            .eq('id', formdata.id)
        if (error) {
            throw new Error(error.message);
        }
        return data
    } catch(error) {
        console.error(`error in delete in ProfilesModel ${error}`);
    }
}





