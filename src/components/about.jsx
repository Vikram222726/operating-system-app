import React from 'react';

const About = () => {
    return(
        <div className="about-header">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-8 mx-auto diff-head">
                        <h3 className="about-head"><b className="E">E</b>verything about <b className="E">O</b>perating <b className="E">S</b>ystem</h3>
                    </div>
                </div>
                <div className="row head2">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                        <h5 className="txt">
                        An <b>operating system</b> is a program that controls the execution of application 
                        programs and acts as an interface between the user of a computer and the computer hardware.
                        </h5>
                        <h5 className="txt">
                        It is concerned with the allocation of resources and services,
                        such as memory, processors, devices, and information.
                        The operating system correspondingly includes programs to manage these resources, 
                        such as a traffic controller, a scheduler, memory management module, I/O programs, 
                        and a file system.
                        </h5>
                        <h5 className="txt">
                        The purpose of an operating system is to provide an environment 
                        in which a user can execute programs in a convenient and efficient manner.
                        </h5>
                    </div>
                    <div className="col-lg-1 order-1 order-lg-2" />
                    <div className="col-lg-5 order-1 order-lg-2 about-img" />
                </div>
                <div className="row cmn">
                    <div className="col-8 mx-auto diff-head">
                        <h3><b className="E">T</b>ypes of <b className="E">O</b>perating <b className="E">S</b>ystem</h3>
                    </div>
                </div>
                <div className="row cmn1">
                    <div className="col-10 mx-auto pt-5 pt-lg-0 order-2 order-lg-1">
                        <ol type="i">
                            <li className="list-item">Batch Operating System</li>
                            <li className="list-item">Time-Sharing Operating System</li>
                            <li className="list-item">Distributed Operating System</li>
                            <li className="list-item">Network Operating System</li>
                            <li className="list-item">Real-Time Operating System</li>
                        </ol>
                    </div>
                </div>
                <div className="row cmn">
                    <div className="col-8 mx-auto diff-head">
                        <h3><b className="E">S</b>ome of our favourite <b className="E">O</b>perating <b className="E">S</b>ystems</h3>
                    </div>
                </div>
                <div className="row cmn1">
                    <div className="col-8 os1">
                        <h4><u><b>W</b>indows <b>O</b>perating <b>S</b>ystem</u></h4>
                    </div>
                </div>
                <div className="row head2">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                        <h5 className="txt">Microsoft Windows, commonly referred to as Windows, is a group of several 
                            proprietary graphical operating system families, all of which are developed 
                            and marketed by <b>Microsoft</b>.
                        </h5>
                        <h5 className="txt">
                        Microsoft introduced an operating environment named Windows on November 20, 
                        1985, as a graphical operating system shell for <b>MS-DOS</b> in response to the growing 
                        interest in graphical user interfaces (GUIs).
                        </h5>
                        <h5 className="txt">Active Microsoft Windows families include Windows <b>NT</b> and 
                        Windows <b>IoT</b>; these may encompass subfamilies, (e.g. Windows Server or Windows 
                        Embedded Compact) </h5>
                    </div>
                    <div className="col-lg-1 order-1 order-lg-2" />
                    <div className="col-lg-5 order-1 order-lg-2 about-imgwin" />
                </div>
                <div className="row cmn1">
                    <div className="col-8 os1">
                        <h4><u><b>L</b>inux <b>O</b>perating <b>S</b>ystem</u></h4>
                    </div>
                </div>
                <div className="row head2">
                    <div className="col-md-5 pt-5 pt-lg-0 order-2 order-lg-1 about-imglin" />
                    <div className="col-lg-1 order-1 order-lg-2" />
                    <div className="col-lg-6 order-1 order-lg-2" >
                        <h5 className="txt">
                            Linux is a family of open-source Unix-like operating systems based on the Linux 
                            kernel, an operating system kernel first released on September 17, 1991, by  
                            <b> Linus Torvalds</b>. Linux is typically packaged in a Linux distribution.
                        </h5>
                        <h5 className="txt">
                        Distributions include the Linux kernel and supporting system software and libraries, 
                        many of which are provided by the <b>GNU</b> Project. Many Linux distributions use the word 
                        "Linux" in their name, but the Free Software Foundation uses the name "GNU/Linux" to 
                        emphasize the importance of GNU software.
                        </h5>
                        <h5 className="txt">
                        Popular Linux distributions include <b>Debian, Fedora, and Ubuntu</b>. Commercial 
                        distributions include <b>Red Hat Enterprise Linux and SUSE Linux Enterprise Server</b>.
                        </h5>
                    </div>
                </div>
                <div className="row cmn1">
                    <div className="col-8 os1">
                        <h4><u><b>M</b>ac <b>O</b>perating <b>S</b>ystem</u></h4>
                    </div>
                </div>
                <div className="row head2">
                    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1">
                        <h5 className="txt">
                            macOS is a series of proprietary graphical operating systems developed and 
                            marketed by Apple Inc. since 2001.
                        </h5>
                        <h5 className="txt">
                            It is the primary operating system for Apple's Mac computers. Within the 
                            market of desktop, laptop and home computers, and by web usage, it is the 
                            second most widely used desktop OS, after Microsoft Windows.
                        </h5>
                        <h5 className="txt">
                            The first desktop version, Mac OS X 10.0, was released in March 2001, 
                            with its first update, 10.1, arriving later that year. The "X" in Mac OS 
                            X and OS X is the Roman numeral for the number 10 and is pronounced as such.
                        </h5>
                    </div>
                    <div className="col-lg-1 order-1 order-lg-2" />
                    <div className="col-lg-5 order-1 order-lg-2 about-imgapl" />
                </div>
            </div>
        </div>
    )
}

export default About;