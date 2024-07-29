<script>
    document.querySelectorAll('.card-hover').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            card.style.setProperty('--mouse-x', `${x}px`);
            card.style.setProperty('--mouse-y', `${y}px`);
        });

        card.addEventListener('mouseleave', () => {
            card.style.setProperty('--mouse-x', '50%');
            card.style.setProperty('--mouse-y', '50%');
        });
    });
	
	
    function initMap() {
        var imperialHotel = { lat: 9.010793, lng: 38.761252 };
        var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 15,
            center: imperialHotel
        });
        var marker = new google.maps.Marker({
            position: imperialHotel,
            map: map
        });
    }


<script async defer
        src="https://maps.googleapis.com/maps/api/js?key=YOUR_GOOGLE_MAPS_API_KEY&callback=initMap">
</script>
	
	
	
	
	
</script>