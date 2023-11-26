const serviceBookletEntryService = {
  addEntry: async (data) => {
    try {
      const res = await fetch(process.env.REACT_APP_BASE_API_URL + 'serviceBooklet/serviceBookletEntry', {
        method: 'POST',
        credentials: 'include',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        return await res.json();
      } else {
        const errorData = await res.json();
        throw errorData.message;
      }
    } catch (error) {
      throw error;
    }
  },
};

export default serviceBookletEntryService;
