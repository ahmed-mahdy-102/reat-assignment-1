import React, { Component } from 'react';

export default class PortfolioModal extends Component {
  render() {
    return (
      <>
        <div
          class='portfolio-modal modal fade'
          id='portfolioModal1'
          tabindex='-1'
          role='dialog'
          aria-labelledby='portfolioModal1Label'
          aria-hidden='true'>
          <div class='modal-dialog modal-xl' role='document'>
            <div class='modal-content'>
              <button
                class='close'
                type='button'
                data-dismiss='modal'
                aria-label='Close'>
                <span aria-hidden='true'>
                  <i class='fas fa-times'></i>
                </span>
              </button>
              <div class='modal-body text-center'>
                <div class='container'>
                  <div class='row justify-content-center'>
                    <div class='col-lg-8'>
                      <h2
                        class='portfolio-modal-title text-secondary text-uppercase mb-0'
                        id='portfolioModal1Label'>
                        Log Cabin
                      </h2>
                      <div class='divider-custom text-center' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '300px', margin: '0 auto' }}>
                        <div class='divider-custom-line' style={{ flex: 1, height: '2px', backgroundColor: '#6c757d' }}></div>
                        <div class='divider-custom-icon mx-3'>
                          <i class='fas fa-star' style={{ color: '#6c757d' }}></i>
                        </div>
                        <div class='divider-custom-line' style={{ flex: 1, height: '2px', backgroundColor: '#6c757d' }}></div>
                      </div>
                      <img
                        class='img-fluid rounded mb-5'
                        src='assets/img/portfolio/cabin.png'
                        alt=''
                      />
                      <p class='mb-5'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Mollitia neque assumenda ipsam nihil, molestias
                        magnam, recusandae quos quis inventore quisquam velit
                        asperiores, vitae? Reprehenderit soluta, eos quod
                        consequuntur itaque. Nam.
                      </p>
                      <button class='btn btn-primary' data-dismiss='modal'>
                        <i class='fas fa-times fa-fw'></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class='portfolio-modal modal fade'
          id='portfolioModal2'
          tabindex='-1'
          role='dialog'
          aria-labelledby='portfolioModal2Label'
          aria-hidden='true'>
          <div class='modal-dialog modal-xl' role='document'>
            <div class='modal-content'>
              <button
                class='close'
                type='button'
                data-dismiss='modal'
                aria-label='Close'>
                <span aria-hidden='true'>
                  <i class='fas fa-times'></i>
                </span>
              </button>
              <div class='modal-body text-center'>
                <div class='container'>
                  <div class='row justify-content-center'>
                    <div class='col-lg-8'>
                      <h2
                        class='portfolio-modal-title text-secondary text-uppercase mb-0'
                        id='portfolioModal2Label'>
                        Tasty Cake
                      </h2>
                      <div class='divider-custom text-center' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '300px', margin: '0 auto' }}>
                        <div class='divider-custom-line' style={{ flex: 1, height: '2px', backgroundColor: '#6c757d' }}></div>
                        <div class='divider-custom-icon mx-3'>
                          <i class='fas fa-star' style={{ color: '#6c757d' }}></i>
                        </div>
                        <div class='divider-custom-line' style={{ flex: 1, height: '2px', backgroundColor: '#6c757d' }}></div>
                      </div>
                      <img
                        class='img-fluid rounded mb-5'
                        src='assets/img/portfolio/cake.png'
                        alt=''
                      />
                      <p class='mb-5'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Mollitia neque assumenda ipsam nihil, molestias
                        magnam, recusandae quos quis inventore quisquam velit
                        asperiores, vitae? Reprehenderit soluta, eos quod
                        consequuntur itaque. Nam.
                      </p>
                      <button class='btn btn-primary' data-dismiss='modal'>
                        <i class='fas fa-times fa-fw'></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class='portfolio-modal modal fade'
          id='portfolioModal3'
          tabindex='-1'
          role='dialog'
          aria-labelledby='portfolioModal3Label'
          aria-hidden='true'>
          <div class='modal-dialog modal-xl' role='document'>
            <div class='modal-content'>
              <button
                class='close'
                type='button'
                data-dismiss='modal'
                aria-label='Close'>
                <span aria-hidden='true'>
                  <i class='fas fa-times'></i>
                </span>
              </button>
              <div class='modal-body text-center'>
                <div class='container'>
                  <div class='row justify-content-center'>
                    <div class='col-lg-8'>
                      <h2
                        class='portfolio-modal-title text-secondary text-uppercase mb-0'
                        id='portfolioModal3Label'>
                        Circus Tent
                      </h2>
                      <div class='divider-custom text-center' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '300px', margin: '0 auto' }}>
                        <div class='divider-custom-line' style={{ flex: 1, height: '2px', backgroundColor: '#6c757d' }}></div>
                        <div class='divider-custom-icon mx-3'>
                          <i class='fas fa-star' style={{ color: '#6c757d' }}></i>
                        </div>
                        <div class='divider-custom-line' style={{ flex: 1, height: '2px', backgroundColor: '#6c757d' }}></div>
                      </div>
                      <img
                        class='img-fluid rounded mb-5'
                        src='assets/img/portfolio/circus.png'
                        alt=''
                      />
                      <p class='mb-5'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Mollitia neque assumenda ipsam nihil, molestias
                        magnam, recusandae quos quis inventore quisquam velit
                        asperiores, vitae? Reprehenderit soluta, eos quod
                        consequuntur itaque. Nam.
                      </p>
                      <button class='btn btn-primary' data-dismiss='modal'>
                        <i class='fas fa-times fa-fw'></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class='portfolio-modal modal fade'
          id='portfolioModal4'
          tabindex='-1'
          role='dialog'
          aria-labelledby='portfolioModal4Label'
          aria-hidden='true'>
          <div class='modal-dialog modal-xl' role='document'>
            <div class='modal-content'>
              <button
                class='close'
                type='button'
                data-dismiss='modal'
                aria-label='Close'>
                <span aria-hidden='true'>
                  <i class='fas fa-times'></i>
                </span>
              </button>
              <div class='modal-body text-center'>
                <div class='container'>
                  <div class='row justify-content-center'>
                    <div class='col-lg-8'>
                      <h2
                        class='portfolio-modal-title text-secondary text-uppercase mb-0'
                        id='portfolioModal4Label'>
                        Controller
                      </h2>
                      <div class='divider-custom text-center' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '300px', margin: '0 auto' }}>
                        <div class='divider-custom-line' style={{ flex: 1, height: '2px', backgroundColor: '#6c757d' }}></div>
                        <div class='divider-custom-icon mx-3'>
                          <i class='fas fa-star' style={{ color: '#6c757d' }}></i>
                        </div>
                        <div class='divider-custom-line' style={{ flex: 1, height: '2px', backgroundColor: '#6c757d' }}></div>
                      </div>
                      <img
                        class='img-fluid rounded mb-5'
                        src='assets/img/portfolio/game.png'
                        alt=''
                      />
                      <p class='mb-5'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Mollitia neque assumenda ipsam nihil, molestias
                        magnam, recusandae quos quis inventore quisquam velit
                        asperiores, vitae? Reprehenderit soluta, eos quod
                        consequuntur itaque. Nam.
                      </p>
                      <button class='btn btn-primary' data-dismiss='modal'>
                        <i class='fas fa-times fa-fw'></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class='portfolio-modal modal fade'
          id='portfolioModal5'
          tabindex='-1'
          role='dialog'
          aria-labelledby='portfolioModal5Label'
          aria-hidden='true'>
          <div class='modal-dialog modal-xl' role='document'>
            <div class='modal-content'>
              <button
                class='close'
                type='button'
                data-dismiss='modal'
                aria-label='Close'>
                <span aria-hidden='true'>
                  <i class='fas fa-times'></i>
                </span>
              </button>
              <div class='modal-body text-center'>
                <div class='container'>
                  <div class='row justify-content-center'>
                    <div class='col-lg-8'>
                      <h2
                        class='portfolio-modal-title text-secondary text-uppercase mb-0'
                        id='portfolioModal5Label'>
                        Locked Safe
                      </h2>
                      <div class='divider-custom text-center' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '300px', margin: '0 auto' }}>
                        <div class='divider-custom-line' style={{ flex: 1, height: '2px', backgroundColor: '#6c757d' }}></div>
                        <div class='divider-custom-icon mx-3'>
                          <i class='fas fa-star' style={{ color: '#6c757d' }}></i>
                        </div>
                        <div class='divider-custom-line' style={{ flex: 1, height: '2px', backgroundColor: '#6c757d' }}></div>
                      </div>
                      <img
                        class='img-fluid rounded mb-5'
                        src='assets/img/portfolio/safe.png'
                        alt=''
                      />
                      <p class='mb-5'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Mollitia neque assumenda ipsam nihil, molestias
                        magnam, recusandae quos quis inventore quisquam velit
                        asperiores, vitae? Reprehenderit soluta, eos quod
                        consequuntur itaque. Nam.
                      </p>
                      <button class='btn btn-primary' data-dismiss='modal'>
                        <i class='fas fa-times fa-fw'></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class='portfolio-modal modal fade'
          id='portfolioModal6'
          tabindex='-1'
          role='dialog'
          aria-labelledby='portfolioModal6Label'
          aria-hidden='true'>
          <div class='modal-dialog modal-xl' role='document'>
            <div class='modal-content'>
              <button
                class='close'
                type='button'
                data-dismiss='modal'
                aria-label='Close'>
                <span aria-hidden='true'>
                  <i class='fas fa-times'></i>
                </span>
              </button>
              <div class='modal-body text-center'>
                <div class='container'>
                  <div class='row justify-content-center'>
                    <div class='col-lg-8'>
                      <h2
                        class='portfolio-modal-title text-secondary text-uppercase mb-0'
                        id='portfolioModal6Label'>
                        Submarine
                      </h2>
                      <div class='divider-custom text-center' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', maxWidth: '300px', margin: '0 auto' }}>
                        <div class='divider-custom-line' style={{ flex: 1, height: '2px', backgroundColor: '#6c757d' }}></div>
                        <div class='divider-custom-icon mx-3'>
                          <i class='fas fa-star' style={{ color: '#6c757d' }}></i>
                        </div>
                        <div class='divider-custom-line' style={{ flex: 1, height: '2px', backgroundColor: '#6c757d' }}></div>
                      </div>
                      <img
                        class='img-fluid rounded mb-5'
                        src='assets/img/portfolio/submarine.png'
                        alt=''
                      />
                      <p class='mb-5'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Mollitia neque assumenda ipsam nihil, molestias
                        magnam, recusandae quos quis inventore quisquam velit
                        asperiores, vitae? Reprehenderit soluta, eos quod
                        consequuntur itaque. Nam.
                      </p>
                      <button class='btn btn-primary' data-dismiss='modal'>
                        <i class='fas fa-times fa-fw'></i>
                        Close Window
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}