const tableName = 'category';

const up = async (queryInterface) => {
    const categories = [
        'Agriculture',
        'Accounting',
        'Beauty & Personal Care',
        'Business Services',
        'B2B',
        'Cryptocurrencies',
        'Commodities',
        'Construction',
        'Distribution',
        'Design',
        'Entertainment',
        'Events organization',
        'Education',
        'E-commerce',
        'Finances',
        'Fashion',
        'Food & beverages',
        'Health',
        'Home Appliances',
        'IT',
        'Import & Export',
        'Logistics',
        'Medicine',
        'Manufacturing',
        'Marketing',
        'Media',
        'Public catering',
        'Packaging & Printing',
        'Real Estate',
        'Rental Services',
        'Retail',
        'Service industry',
        'Sports',
        'Trading',
        'Travel',
        'Transport',
        'Wholesale trading'
    ];
    return queryInterface.bulkInsert(tableName, categories.map((category) => {
       return {
           title: category,
           created_at: new Date(),
           updated_at: new Date(),
       }
      })
    );
};

const down = (queryInterface) => {
    return queryInterface.bulkDelete(tableName, {});
};

module.exports = {
    up,
    down,
};
