import { useCallback } from 'react';
import * as SC from './tags-list.styles';

const TagsList = ({
  tags,
}: {
  tags: string[] | undefined,
}) => {
  const getRandomTagColor = useCallback(() => {
    type TagColorType = 'blue' | 'green' | 'yellow' |'purple' | 'orange';
    const colors = [
      'blue',
      'green',
      'yellow',
      'purple',
      'orange',
    ];
    const idx = Math.floor(Math.random() * colors.length);

    return colors[idx] as TagColorType;
  }, []);

  if ((tags?.length ?? 0) === 0) return null;

  return (
    <SC.Container>
      {tags!.map((tag, i) => {
        const color = getRandomTagColor();

        return (
          <SC.Tag
            key={i}
            color={color}
          >
            {tag}
          </SC.Tag>
        )}
      )}
    </SC.Container>
  )
}

export default TagsList
