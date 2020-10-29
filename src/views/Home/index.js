import React, { useState, useEffect } from 'react'
import api from '../../service/api'
import './styles.scss'

import Trail from '../../components/Trail'

function Home() {

    return (
      <>
        <div class="container">
          {
            Trail('games')
          }
        </div>
      </>
    );
  }
  
  export default Home;
  