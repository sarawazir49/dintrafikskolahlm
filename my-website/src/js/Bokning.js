import { useState } from 'react';
import '../css/bokning.css';

function Bokning() {
    const [status, setStatus] = useState('');
    const [selectedDate, setSelectedDate] = useState('');
    const [selectedTime, setSelectedTime] = useState('');

    const today = new Date().toISOString().split('T')[0];

    const availableTimes = [
        '08:00', '09:00', '10:00', '11:00',
        '13:00', '14:00', '15:00', '16:00', '17:00',
    ];

    const isSunday = (dateStr) => new Date(dateStr).getDay() === 0;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (isSunday(selectedDate)) {
            setStatus('Söndagar är inte tillgängliga för bokning. Välj en annan dag.');
            return;
        }

        const form = e.target;
        const data = new FormData(form);
        data.append('date', selectedDate);
        data.append('time', selectedTime);

        const response = await fetch('https://formspree.io/f/xanojlkr', {
            method: 'POST',
            body: data,
            headers: { Accept: 'application/json' },
        });

        if (response.ok) {
            form.reset();
            setSelectedTime('');
            setSelectedDate('');
            setStatus('Tack! Din bokning har skickats.');
        } else {
            setStatus('Ett fel inträffade. Försök igen.');
        }
    };

    return (
<div className='bokning'>
    <div className='bokning-container'>
        
        <form onSubmit={handleSubmit}>
          
            <div>  <h1>Boka Körlektion</h1>
                <label htmlFor="name">Skriv ditt namn:</label>
                <input type="text" id="name" name="name" required />
            </div>

            <div>
                <label htmlFor="personnummer">Personnummer (YYYYMMDD-XXXX):</label>
                <input
                    type="text"
                    id="personnummer"
                    name="personnummer"
                    placeholder="19900101-1234"
                    pattern="\d{8}-\d{4}"
                    title="Format: YYYYMMDD-XXXX"
                    required
                />
            </div>

            <div>
                <label htmlFor="date">Välj datum:</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    min={today}
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    required
                />
            </div>

            <div>
                <label htmlFor="time">Välj en tid:</label>
                <select
                    id="time"
                    name="time"
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    required
                >
                    <option value="">--Välj tid--</option>
                    {availableTimes.map((time) => (
                        <option key={time} value={time}>{time}</option>
                    ))}
                </select>
            </div>

            <button type="submit">Boka tid</button>
        </form>

        {status && (
            <p className={status.includes('inte tillgängliga') ? 'error-message' : 'success-message'}>
                {status}
            </p>
        )}
    </div>
</div>
    );
}

export default Bokning;
