<?php

namespace App\Models;
use CodeIgniter\Model;
class RequestLicenceModel extends Model {
    protected $table='zahteva_licencu';
    protected $idUni='IdUni';
    protected $idSer='IdSer';
    protected $datum='Datum_zahteva';
}
