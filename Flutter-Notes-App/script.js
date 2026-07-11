let tasks = [];

let currentFilter = 'all';
let searchQuery = '';

const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoCategory = document.getElementById('todo-category');
const todoPriority = document.getElementById('todo-priority');
const todoDate = document.getElementById('todo-date');
const todoList = document.getElementById('todo-list');
const emptyState = document.getElementById('empty-state');
const currentDateEl = document.getElementById('current-date');
const progressStats = document.getElementById('progress-stats');
const progressBar = document.getElementById('progress-bar');
const searchInput = document.getElementById('search-input');
const filterBtns = document.querySelectorAll('.filter-btn');
const footerCounter = document.getElementById('footer-counter');
const clearCompletedBtn = document.getElementById('clear-completed-btn');

todoDate.value = new Date().toISOString().split('T')[0];
currentDateEl.textContent = new Date().toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' });

function updateAndRender() {
    renderTodos();
}

function renderTodos() {
    const filtered = tasks.filter(t => {
        const matchesFilter = currentFilter === 'all' || 
            (currentFilter === 'pending' && !t.completed) || 
            (currentFilter === 'completed' && t.completed);
        const matchesSearch = t.text.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesFilter && matchesSearch;
    });

    todoList.innerHTML = filtered.map(t => {
        const isOverdue = t.dueDate && t.dueDate < new Date().toISOString().split('T')[0] && !t.completed;
        return `
            <li class="todo-item ${t.completed ? 'completed' : ''}" data-id="${t.id}">
                <label class="checkbox-container">
                    <input type="checkbox" ${t.completed ? 'checked' : ''} class="task-checkbox">
                    <span class="custom-checkmark">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                    </span>
                </label>
                <div class="todo-content">
                    <div class="todo-text-wrapper">
                        <span class="todo-text">${escapeHTML(t.text)}</span>
                    </div>
                    <div class="todo-meta">
                        <span class="badge-category">${t.category}</span>
                        <span class="badge-priority priority-${t.priority}">${t.priority}</span>
                        ${t.dueDate ? `<span class="todo-due ${isOverdue ? 'overdue' : ''}">📅 ${t.dueDate}</span>` : ''}
                    </div>
                </div>
                <div class="todo-actions">
                    <button class="btn-action btn-edit" aria-label="Edit">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 1 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                    </button>
                    <button class="btn-action btn-delete" aria-label="Delete">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                    </button>
                </div>
            </li>
        `;
    }).join('');

    emptyState.style.display = filtered.length === 0 ? 'flex' : 'none';
    updateProgress();
}

todoForm.addEventListener('submit', (e) => {
    e.preventDefault();
    if (todoInput.value.trim() === '') return;

    tasks.unshift({
        id: 't-' + Date.now(),
        text: todoInput.value.trim(),
        completed: false,
        category: todoCategory.value,
        priority: todoPriority.value,
        dueDate: todoDate.value || null
    });

    todoInput.value = '';
    todoCategory.selectedIndex = 0;
    todoPriority.value = 'medium';
    todoDate.value = new Date().toISOString().split('T')[0];
    updateAndRender();
});

todoList.addEventListener('change', (e) => {
    if (e.target.classList.contains('task-checkbox')) {
        const task = tasks.find(t => t.id === e.target.closest('.todo-item').dataset.id);
        if (task) {
            task.completed = e.target.checked;
            updateAndRender();
        }
    }
});

todoList.addEventListener('click', (e) => {
    const item = e.target.closest('.todo-item');
    if (!item) return;
    const task = tasks.find(t => t.id === item.dataset.id);

    if (e.target.closest('.btn-delete')) {
        item.classList.add('deleting');
        item.addEventListener('animationend', () => {
            tasks = tasks.filter(t => t.id !== task.id);
            updateAndRender();
        });
    }
    else if (e.target.closest('.btn-edit')) {
        editTaskPrompt(task);
    }
});

todoList.addEventListener('dblclick', (e) => {
    if (e.target.classList.contains('todo-text')) {
        const id = e.target.closest('.todo-item').dataset.id;
        const task = tasks.find(t => t.id === id);
        if (task) editTaskPrompt(task);
    }
});

function editTaskPrompt(task) {
    const newText = prompt('Edit your task description:', task.text);
    if (newText !== null && newText.trim() !== '') {
        task.text = newText.trim();
        updateAndRender();
    }
}

clearCompletedBtn.addEventListener('click', () => {
    const items = todoList.querySelectorAll('.todo-item');
    let animating = 0;

    items.forEach(item => {
        const task = tasks.find(t => t.id === item.dataset.id);
        if (task && task.completed) {
            animating++;
            item.classList.add('deleting');
            item.addEventListener('animationend', () => {
                animating--;
                if (animating === 0) {
                    tasks = tasks.filter(t => !t.completed);
                    updateAndRender();
                }
            });
        }
    });

    if (animating === 0) {
        tasks = tasks.filter(t => !t.completed);
        updateAndRender();
    }
});

searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    renderTodos();
});

filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        filterBtns.forEach(b => b.classList.remove('active'));
        e.currentTarget.classList.add('active');
        currentFilter = e.currentTarget.dataset.filter;
        renderTodos();
    });
});

function updateProgress() {
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const pct = total ? Math.round((completed / total) * 100) : 0;

    progressStats.textContent = `${pct}% (${completed}/${total})`;
    progressBar.style.width = `${pct}%`;
    footerCounter.textContent = `${total - completed} task${(total - completed) === 1 ? '' : 's'} pending`;
    
    clearCompletedBtn.style.opacity = completed ? '1' : '0.5';
    clearCompletedBtn.style.pointerEvents = completed ? 'auto' : 'none';
}

function escapeHTML(str) {
    return str.replace(/[&<>'"]/g, tag => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', "'": '&#39;', '"': '&quot;' }[tag] || tag));
}

renderTodos();
