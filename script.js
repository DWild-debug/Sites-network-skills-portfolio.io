document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link');
    const viewer = document.getElementById('markdown-viewer');
    const loader = document.getElementById('loading-indicator');

    // Функція асинхронного завантаження файлу
    async function loadMarkdownFile(filePath) {
        loader.classList.remove('hidden'); // Показуємо лоадер
        
        try {
            const response = await fetch(filePath);
            
            if (!response.ok) {
                throw new Error(`Не вдалося завантажити файл: ${response.statusText}`);
            }
            
            const markdownText = await response.text();
            
            // Конвертуємо Markdown в HTML за допомогою Marked.js
            viewer.innerHTML = marked.parse(markdownText);
            
            // Змушуємо Prism.js перезібрати підсвічування для нового коду
            Prism.highlightAllUnder(viewer);

        } catch (error) {
            console.error(error);
            viewer.innerHTML = `
                <div style="color: #ef4444; padding: 20px; border: 1px dashed #ef4444; border-radius: 8px;">
                    <h3>❌ Помилка завантаження документа</h3>
                    <p>${error.message}</p>
                    <p>Перевірте, чи правильно вказано шлях до файлу в архіві репозиторію.</p>
                </div>
            `;
        } finally {
            loader.classList.add('hidden'); // Ховаємо лоадер
        }
    }

    // Вішаємо івент-лісенери на всі посилання в меню
    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Скасовуємо стандартний перехід за лінком

            // Перемикаємо активний клас у меню
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');

            // Беремо шлях до файлу з дата-атрибуту `data-file`
            const fileToLoad = link.getAttribute('data-file');
            if (fileToLoad) {
                loadMarkdownFile(fileToLoad);
            }
        });
    });
}); 