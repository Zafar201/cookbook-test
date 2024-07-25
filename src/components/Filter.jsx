// FilterComponent.js
import React, { memo } from 'react';

const FilterComponent = memo(({ searchTerm, onSearch, sortBy, sortOrder, onSort }) => {
    return (
        <div className="filter-component">
            <input
                type="text"
                className="search-bar"
                placeholder="Search recipes..."
                value={searchTerm}
                onChange={(e) => onSearch(e.target.value)}
            />
            <div className="sort-options">
                <button onClick={() => onSort('name')} className={sortBy === 'name' ? 'active' : ''}>
                    Sort by Name {sortBy === 'name' && (sortOrder === 'asc' ? '▲' : '▼')}
                </button>
            </div>
        </div>
    );
});

export default FilterComponent;