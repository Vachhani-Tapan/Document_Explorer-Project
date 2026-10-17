"use client"

import React from 'react'

function Navbar() {


    return (
        <nav>
            <div className="flex justify-between items-center ">
                <div className="flex justify-between items-center gap-2 pl-20">
                    <img src="/images.png" alt="Orbit Docs Logo" width={55} />
                    <p>Orbit Docs</p>
                </div>

                <div className="flex justify-between items-center gap-8">
                    <Link
                        href="/students"
                        className={pathname === '/students' ? 'text-blue-500' : 'text-black'}>
                        Students
                    </Link>
                    <Link
                        href="/departments"
                        className={pathname === '/departments' ? 'text-blue-500' : 'text-black'}>
                        Departments
                    </Link>
                    <Link href="/about" className={pathname === '/about' ? 'text-blue-500' : 'text-black'}>
                        About
                    </Link>
                </div>

                <div className="pr-20">
                    <p>Frontend Practice</p>
                </div>
            </div>
        </nav>
    )
}

export default Navbar