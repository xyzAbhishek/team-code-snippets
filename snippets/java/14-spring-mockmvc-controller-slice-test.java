mockMvc.perform(post("/api/items")
        .contentType(MediaType.APPLICATION_JSON)
        .content(objectMapper.writeValueAsString(dto)))
    .andExpect(status().isCreated())
    .andExpect(jsonPath("$.id").exists());