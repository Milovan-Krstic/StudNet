univerzitet je izveden iz korisnika , korisnikova polja sada mogu biti null, student idStud vise nije auto increment, 
dodato je on_delete cascade na sva forgen key polja , 
izbacena su neka polja iz tabele univerzitet (ostala su samo IdUni , sertifikat),
dodata polja za admina username and password
added cascade on delete gde je falilo
add img to korinsik and admin
also change on delete cascde to restrict for IdCtag
added a acctive column identifier for korinsik
