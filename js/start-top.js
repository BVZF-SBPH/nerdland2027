/* Bij herladen altijd bovenaan starten, ook als er een #anker in de adresbalk staat. */
if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
if (location.hash) history.replaceState(null, '', location.pathname + location.search);
