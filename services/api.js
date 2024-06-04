import axios from 'axios';

export const api  = axios.create({
    baseURL: 'https://ihhinfviewqskbunwuzt.supabase.co/rest/v1',
    headers: {
        apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloaGluZnZpZXdxc2tidW53dXp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1MjA2NzgsImV4cCI6MjAzMzA5NjY3OH0.vEPxhmLCbMRsF3ezBxbET7pVrZVI4Ua3BdwL3aDWwrI",
        authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloaGluZnZpZXdxc2tidW53dXp0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTc1MjA2NzgsImV4cCI6MjAzMzA5NjY3OH0.vEPxhmLCbMRsF3ezBxbET7pVrZVI4Ua3BdwL3aDWwrI"
    }
})