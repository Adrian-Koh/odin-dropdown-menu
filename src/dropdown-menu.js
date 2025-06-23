class DropdownMenu {
    constructor() {
        this.itemsVisible = true;
        this.toggleButton = document.querySelector('#websites-btn');
        this.toggleButton.addEventListener('click', () => {
            this.toggleItemsVisibility();
        });
        this.websitesSection = document.querySelector('#websites');

        this.toggleItemsVisibility();
    }

    toggleItemsVisibility() {
        if (this.itemsVisible) {
            this.websitesSection.style.display = 'none';
        }
        else {
            this.websitesSection.style.display = 'block';
        }

        this.itemsVisible = !this.itemsVisible;
    }
}

export {DropdownMenu};