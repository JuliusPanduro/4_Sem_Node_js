import {  writable } from 'svelte/store'

export const user = writable(null);

        
        /*
        export async function userLoggedIn(jwtToken){
       jwtToken = localStorage.getItem('my_token')
        const res = await fetch('http://localhost:3000/store',{
            method: 'GET',
            headers:{
                Authorization: `Bearer ${jwtToken}` 
            },
        });

        if(res.status === 200){
            loggedIn.set(true)
            console.log(get(loggedIn));
        }
        
        
        .then((res) => {
            if(res.ok === 200){
                const data = await res.json();
                loggedIn.set(true);
                console.log(res.status);
            }else{
                console.log(res.status);
                loggedIn.set(false);
            }
    })
    console.log(res.status,loggedIn)*/
