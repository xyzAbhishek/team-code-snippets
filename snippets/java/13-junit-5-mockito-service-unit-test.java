@ExtendWith(MockitoExtension.class)
class OrderServiceTest {
    @Mock private OrderRepository repo;
    @InjectMocks private OrderService service;
    @Test
    void shouldFindOrder() {
        when(repo.findById(1L)).thenReturn(Optional.of(new Order()));
        assertNotNull(service.getById(1L));
    }
}