import React from 'react'
import Header from '../components/Header';
import Footer from '../components/Footer';

function MovieDetails() {
  return (
    <div style={{
      display: 'grid',
      gridTemplateRows: 'auto 1fr auto',
      minHeight: '100vh'
    }}>        
    <Header />
      <main style={{ padding: '2rem', textAlign: 'center' }}>
        <h1>MovieDetails</h1>
      </main>
      <Footer />
    </div>
  )
}

export default MovieDetails
