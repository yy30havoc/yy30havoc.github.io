document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    const letter = document.getElementById('letter');
    
    envelope.addEventListener('click', function() {
        envelope.classList.toggle('open');
    });
});