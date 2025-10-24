
async function fetchProfileData() {
    const url = 'https://raw.githubusercontent.com/RenataUzeda/portfolio-dio/src/data/profile.json';
    const response = await fetch(url)
    const profileData = await response.json()
    return profileData
}
