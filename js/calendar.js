document.addEventListener('DOMContentLoaded', function () {
    const calendar = document.getElementById('calendar');
    const confirmation = document.getElementById('confirmation');
    const currentDate = new Date();
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();

    function generateCalendar(month, year) {
        calendar.innerHTML = '';  // Limpa o calendário
        const daysInMonth = new Date(year, month + 1, 0).getDate();
        const firstDay = new Date(year, month, 1).getDay();
        const monthNames = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

        // Mostra o mês e ano no topo
        const monthHeader = document.createElement('div');
        monthHeader.textContent = `${monthNames[month]} ${year}`;
        monthHeader.style.gridColumn = 'span 7';
        calendar.appendChild(monthHeader);

        // Nomes dos dias da semana
        const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
        dayNames.forEach(day => {
            const dayElement = document.createElement('div');
            dayElement.textContent = day;
            calendar.appendChild(dayElement);
        });

        // Espaços em branco para os primeiros dias
        for (let i = 0; i < firstDay; i++) {
            const emptyDiv = document.createElement('div');
            calendar.appendChild(emptyDiv);
        }

        // Criação dos dias do mês
        for (let day = 1; day <= daysInMonth; day++) {
            const dayElement = document.createElement('div');
            dayElement.textContent = day;
            dayElement.addEventListener('click', function () {
                const selected = document.querySelector('#calendar .selected');
                if (selected) selected.classList.remove('selected');
                dayElement.classList.add('selected');

                // Exibe a notificação de agendamento
                confirmation.textContent = `Agendamento confirmado para ${day}/${month + 1}/${year}`;
                confirmation.style.display = 'block';
            });
            calendar.appendChild(dayElement);
        }
    }

    generateCalendar(month, year);
});
