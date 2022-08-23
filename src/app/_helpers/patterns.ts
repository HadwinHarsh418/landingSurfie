export const Patterns = {
    email:'[A-Za-z0-9._%-]+@[A-Za-z0-9._%-]+\\.[a-z]{2,3}',
    password: '(?=\\D*\\d)(?=[^a-z]*[a-z])(?=[^A-Z]*[A-Z]).{8,30}',
    number : (/^\(\d{3}\)\s\d{3}-\d{4}$/),
    website:'(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]?',
}