import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from "react-router-dom";
import {router} from "./Main/Router";
import {QueryClient} from "@tanstack/react-query";
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            gcTime: 20,
        },
    },
})

const persister = createSyncStoragePersister({
    storage: window.localStorage,
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<MainApp/>);

function MainApp() {
    return <PersistQueryClientProvider
        client={queryClient}
        persistOptions={{persister}}
    >
        <React.StrictMode>
            <RouterProvider router={router}/>
        </React.StrictMode>
    </PersistQueryClientProvider>
}