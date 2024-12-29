
import styles from './MainView.module.css'
import { Search } from 'lucide-react';

import SearchResultCard from '../components/SearchResultCard';
import {data} from './data'

import { index_folder } from '../functions/processingEngine';
function MainView() {
      const handle_index = async ()=>{
        const details = [];
        try{
            const folderHandle  = await window.showDirectoryPicker();

            const processFolder = async (folderHandle) => {
                for await (const entry of folderHandle.values()) {
                    if (entry.name.startsWith(".")) {
                        continue;
                    }
                    if (entry.kind === 'file') {
                        // console.log("entry: ", entry)
                        // If the entry is a file, process it
                        const file = await entry.getFile(); // Get the File object
                        details.push(index_folder(file)); // Pass the file to your function
                    } else if (entry.kind === 'directory') {
                        // If the entry is a directory, process it recursively
                        await processFolder(entry);
                    }
                }
            };

            await processFolder(folderHandle);
        } catch (error) {
            console.log("Unable to open the directory...")
        }

        console.log(details)
      }
    

    return (
        <div className={styles.main_view_container}>
            <span className={styles.title}>File Retrieval Engine</span>
            <div className={styles.index_container}>
                <span>
                    <p>
                        Index Folder
                    </p>
                    <p>Select folder to index</p>
                </span>
                <span>
                    <button
                    onClick={handle_index}
                    >
                        Select Folder
                    </button>
                </span>
            </div>
            <div className={styles.search_container}>
               <input type='text' placeholder='Enter Terms To Search' />
               <span>
                 <Search className={styles.search_button} size={35}/>
               </span>
            </div>
            <div className={styles.search_results_container}>
                <p className={styles.search_result_title}>Search Results:</p>
                <div className={styles.search_results_list  }>
                    {data.map((data, index)=>{
                        return (
                            <SearchResultCard 
                            
                                key={data.id}
                                docName={data.doc_name}
                                avail={data.Availability}
                                occur={data.occurences}
                                origin={data.origin}
                                author={data.author}
                            />
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default MainView