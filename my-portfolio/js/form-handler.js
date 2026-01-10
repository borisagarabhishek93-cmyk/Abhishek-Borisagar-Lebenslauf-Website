// form-handler.js - Contact Form Submission with Email
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    
    if (contactForm) {
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(this);
            const data = Object.fromEntries(formData);
            
            // Show loading state
            const submitBtn = this.querySelector('.submit-btn');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
            submitBtn.disabled = true;
            
            try {
                // Send to your email using Formspree or EmailJS
                // OPTION 1: Using Formspree (Recommended - Free)
                // Replace 'your-email@example.com' with your Formspree form ID
                const response = await fetch('https://formspree.io/f/YOUR_FORMSPREE_ID', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        name: data.name,
                        email: data.email,
                        subject: data.subject || 'Contact Form Submission',
                        message: data.message
                    })
                });
                
                // OPTION 2: Using EmailJS (Alternative)
                // You need to sign up at https://www.emailjs.com/
                /*
                emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
                    from_name: data.name,
                    from_email: data.email,
                    subject: data.subject,
                    message: data.message,
                    to_email: 'YOUR_EMAIL@gmail.com'
                });
                */
                
                if (response.ok) {
                    showSuccessMessage();
                    contactForm.reset();
                } else {
                    throw new Error('Failed to send message');
                }
            } catch (error) {
                showErrorMessage(error.message);
            } finally {
                // Reset button
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }
});

function showSuccessMessage() {
    const successDiv = document.createElement('div');
    successDiv.className = 'form-success-message';
    successDiv.innerHTML = `
        <div style="background: #d4edda; color: #155724; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <i class="fas fa-check-circle"></i>
            <span data-lang="en">Message sent successfully! I'll get back to you soon.</span>
            <span data-lang="de">Nachricht erfolgreich gesendet! Ich melde mich bald bei Ihnen.</span>
        </div>
    `;
    
    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(successDiv, form.nextSibling);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        successDiv.remove();
    }, 5000);
}

function showErrorMessage(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'form-error-message';
    errorDiv.innerHTML = `
        <div style="background: #f8d7da; color: #721c24; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <i class="fas fa-exclamation-circle"></i>
            <span data-lang="en">Failed to send message. Please try again or contact me directly.</span>
            <span data-lang="de">Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es erneut oder kontaktieren Sie mich direkt.</span>
        </div>
    `;
    
    const form = document.getElementById('contactForm');
    form.parentNode.insertBefore(errorDiv, form.nextSibling);
    
    // Remove message after 5 seconds
    setTimeout(() => {
        errorDiv.remove();
    }, 5000);
}