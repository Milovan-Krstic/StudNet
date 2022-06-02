<?php namespace App\Filters;

use CodeIgniter\HTTP\RequestInterface;
use CodeIgniter\HTTP\ResponseInterface;
use CodeIgniter\Filters\FilterInterface;

class GuestFilter implements FilterInterface
{
    public function before(RequestInterface $request,$arguments = null)
    {
        $session=\Config\Services::session();
            
        
        if( $session->has('logedinUsers')){
            return redirect()->to(site_url('student-main'));
            
            }
                  if( $session->has('logedinAdmin')){
                     return redirect()->to(base_url('Admin/index'));
                 }
    }

    //--------------------------------------------------------------------

    public function after(RequestInterface $request, ResponseInterface $response, $arguments = null)
    {
        // Do something here
    }
}