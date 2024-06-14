import React from 'react'
import './LoginSignup.css'



const LoginSignup = () => {
    return (
        <>

            <section class="et-hero-tabs" >
                <h1>PROGRAMMING LANGUAGES</h1>
                <h3>Programming languages you have to know in 2024</h3>
                <div class="et-hero-tabs-container" id="home">
                    <a class="et-hero-tab" href="#tab-es6">JAVA</a>
                    <a class="et-hero-tab" href="#tab-flexbox">PYTHON</a>
                    <a class="et-hero-tab" href="#tab-react">JAVASCRIPT</a>
                    <a class="et-hero-tab" href="#tab-angular">PHP</a>
                    <a class="et-hero-tab" href="#tab-other">C++</a>
                    <span class="et-hero-tab-slider"></span>
                </div>
            </section>


            <main class="et-main">
                <section class="et-slide" id="tab-es6">
                    <h1>JAVA</h1>
                    <h3>something about flexbox</h3>
                    <p>Run anywhere in the world with
                        Atlas.
                    </p>


                </section>
                <section class="et-slide" id="tab-flexbox">
                    <h1>PYTHON</h1>
                    <h3>something about flexbox2</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>

                </section>
                <section class="et-slide" id="tab-react">
                    <h1>JAVASCRIPT</h1>
                    <h3>something about react</h3>
                </section>
                <section class="et-slide" id="tab-angular">
                    <h1>PHP</h1>
                    <h3>something about angular</h3>
                </section>
                <section class="et-slide" id="tab-other">
                    <h1>C++</h1>
                    <h3>something about other</h3>
                </section>
            </main>

        </>
    )
}

export default LoginSignup