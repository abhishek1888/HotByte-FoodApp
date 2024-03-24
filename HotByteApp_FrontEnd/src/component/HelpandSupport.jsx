import React from 'react'

export const HelpandSupport = () => {
  return (
    <div className="container">
       <div style={{ flexGrow: 1 }}>
        <div  style={{ position: 'relative', padding: '0 20px', background: '#37718e', minHeight: '100vh' }}>
          <div  style={{ color: '#fff', marginBottom: '37px', marginTop: '37px', position: 'relative' }}>
            <div >
              <h1 >Help &amp; Support</h1>
              <div >Let's take a step ahead and help you better.</div>
            </div>
          </div>
          <div  style={{ background: '#fff', backgroundSize: 'contain',display: 'flex', justifyContent: 'center', alignItems: 'center',padding: '20px'  }}>
            <div >
              <p>Contact no : 678934092</p>
              <p>Address : Vikesh nagar</p><br/>
              <p>Most Popular questions asked</p>
              <ul>
               <li>How do I place an order?</li>
               <li>What payment methods are accepted?</li>
               <li>How can I track my order?</li>
              </ul>
            </div>
          </div>
        </div>   
        
    
          </div>
            
    </div>
  )
}