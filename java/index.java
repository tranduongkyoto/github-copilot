// convert a string to a number
public class Index {
    public static void main(String[] args) {
        String str = "123";
        int num = Integer.parseInt(str);
        System.out.println(num);
    }
}

// create User class
public class User {
    private String name;
    private String email;
    private String password;
    private String phone;
    private String address;
    private String city;
    private String state;
    private String zip;
    private String country;
}

// create UserRepository class extend JPA repository
public class UserRepository extends JpaRepository<User, Long> {
    // create a method to find user by email
    public User findByEmail(String email) {
        return this.findByEmail(email);
    }
}

// create Auth Controller with signup a method
public class AuthController {
    @Autowired
    private UserRepository userRepository;
    @Autowired
    private BCryptPasswordEncoder bCryptPasswordEncoder;
    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody User user) {
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        user.setRole("USER");
        userRepository.save(user);
        return ResponseEntity.ok().body("User registered successfully!");
    }
}


// create User Dto class 
public class UserDto {
    private String name;
    private String email;
    private String password;
    private String phone;
    private String address;
    private String city;
    private String state;
    private String zip;
    private String country;
}

// create User mapper class
public class UserMapper {
    public UserDto userToUserDto(User user) {
        UserDto userDto = new UserDto();
        userDto.setName(user.getName());
        userDto.setEmail(user.getEmail());
        userDto.setPassword(user.getPassword());
        userDto.setPhone(user.getPhone());
        userDto.setAddress(user.getAddress());
        userDto.setCity(user.getCity());
        userDto.setState(user.getState());
        userDto.setZip(user.getZip());
        userDto.setCountry(user.getCountry());
        return userDto;
    }
}