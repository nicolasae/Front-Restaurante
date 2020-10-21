import React from 'react';

export default function TopBar(){
    return (
        <div id="topbar" class="d-flex align-items-center fixed-top">
            <div class="container d-flex">
                <div class="contact-info mr-auto">
                    <i class="icofont-phone"></i>  333 -5567-321
                    <span class="d-none d-lg-inline-block"><i class="icofont-clock-time icofont-rotate-180"></i> Lun-Sab: 10:00 AM - 22:00 PM</span>
                </div>
            </div>
         </div>

    );


}