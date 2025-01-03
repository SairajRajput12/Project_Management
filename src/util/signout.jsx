const handleSignout = async () => {
    const token = localStorage.getItem('authToken');

    if (!token) {
      alert('You are not logged in!');
      return;
    }

    try {
      const response = await fetch('https://project-management-backend-vp9y.onrender.com/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        // Clear token and role from local storage
        localStorage.removeItem('authToken');
        localStorage.removeItem('level');
        localStorage.removeItem('role');
        localStorage.removeItem('current_user'); 


        // Notify user
        alert('You have been logged out successfully!');

        // Reload to reset state
      } else {
        const data = await response.json();
        alert(`Signout failed: ${data.message}`);
      }
    } catch (error) {
      console.error('Error during signout:', error);
      alert('Something went wrong. Please try again!');
    }
  };

  

export default handleSignout; 