public record UserCreateDTO(
    @NotBlank @Size(min = 2, max = 80) String name,
    @Email @NotBlank String email,
    @Pattern(regexp = "^[a-zA-Z0-9_]{4,20}$") String username
) {}