<?php
namespace App\Models;
use CodeIgniter\Model;


class Chat_RoomModel extends Model {
  protected $table      = 'chet_rooms';
    protected $primaryKey = 'IdCh';

    protected $useAutoIncrement = true;

    protected $returnType = 'object';

    protected $allowedFields = ['IdKor_OD','Text','IdSem','IdCl','IdClTag','IdKor_KA','seen','time_send','LinkTag'];
}
