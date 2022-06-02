<?php namespace App\Filters;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Filters\FilterInterface;


class UserFilter implements FilterInterface
{
    public function before(RequestInterface $request,$arguments = null)
    {
        $session = \Config\Services::session();
        if(!$session->has('logedinModerator') && !$session->has('logedinUniverzitet') 
                && !$session->has('logedinReklamer') 
                && !$session->has('logedinUsers')&& !$session->has('logedinReklamer') 
                && !$session->has('logedinAdmin'))
            return redirect()->to(base_url('Login'));
    }

    //--------------------------------------------------------------------

    public function after(RequestInterface $request, ResponseInterface $response,$arguments = null)
    {
  
    }
}