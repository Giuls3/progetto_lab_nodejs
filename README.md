# progetto_lab_nodejs

***

Il progetto sviluppato consiste nella realizzazione di un web server che restituisce come risposta il blog di un brand di gioielli.

Tra i file è presente il file "local.domusMirabilia.json", contenente la collection del database esportata da MongoDB, dal momento che i dati mostrati nella pagina /article sono dati da un iterazione sui dati del db, ottenuti tramite il modulo "getAllArticle" in db.js

***

## Funzionalità

Il progetto utilizza il pacchetto npm express per creare un web server e il modulo node path, utilizzato in app.js per settare i percorsi delle views e dei partials.
Come risorsa esterna si è utilizzato un database e nello specifico MongoDB. 
