import React from 'react'

function Nav() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark top">
        <span class="navbar-brand" id="name">Nexus Info</span>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
          <div class="navbar-nav" >
            <a class="nav-item nav-link active" href="/">
              Home <span class="sr-only">(current)</span>
            </a>
            <a class="nav-item nav-link active" href="/signup">
              Signup
            </a>
            <a class="nav-item nav-link active" href="/login">
              Login
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Nav