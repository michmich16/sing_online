import { supabase } from '../Config/supabase.config.js';

// GET ALL
export default class ArtistModel {
    static async getAllRecords() {
        try {
            const { data, error } = await supabase
                .from('artists')
                .select('name, id')

            if (error) {
                throw new Error(error)
            } else {
                return data
            }
        } catch (error) {
            console.error(`Fejl i kald af artists: ${error}`);
        }
    }
    // GET BY ID
    static async getRecordByID() {
        try {
            const { data, error } = await supabase
                .from('artists')
                .select('*')
                .eq('id', id)

            if (error) {
                throw new Error(error)
            } else {
                return data
            }
        } catch (error) {
            console.error(`Fejl i kald af artist-liste: ${error}`);
        }
    }
    // CREATE
    static async createRecord(formdata) {
        try {
            let { data, error } = await supabase
                .from('artists')
                .insert([
                    {
                        id: formdata.id,
                        name: formdata.name,
                        description: formdata.description,
                        created_at: formdata.created_at
                    }
                ])
            if (error) {
                throw new Error(error.message);
            }
            return data
        } catch (error) {
            console.error(`error in create in artistmodel ${error}`);
        }
    }
    // UPDATE
    static async updateRecord(formdata) {
        // Function scope
        let { data, error } = await supabase
            .from('artists')
            .update([
                {
                    id: formdata.id,
                    name: formdata.name,
                    description: formdata.description,
                    created_at: formdata.created_at
                }
            ])
            .eq('id', formdata.id)
        if (error) {
            throw new Error(error.message);
        }
        return data
    } catch(error) {
        console.error(`error in update in artistmodel ${error}`);
    }
    // DELETE ARTIST
    static async deleteRecord(formdata) {
        // Function scope
        let { data, error } = await supabase
            .from('artists')
            .delete()
            .eq('id', formdata.id)
        if (error) {
            throw new Error(error.message);
        }
        return data
    } catch(error) {
        console.error(`error in delete in artistsmodel ${error}`);
    }
}

