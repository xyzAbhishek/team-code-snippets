ALTER TABLE group_members
ADD CONSTRAINT fk_group_members_group
FOREIGN KEY (group_id) REFERENCES project_groups(id) ON DELETE CASCADE;