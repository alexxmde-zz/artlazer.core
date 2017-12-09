import { sortDirectionValues } from '../constants';

export const standardQuery = async (model, req, res) => {
  const { pageSize = 10, searchString = '', searchField, 
    sortField, sortDirection = sortDirectionValues.ASC } = req.query;
  const page = parseInt(req.query.page);

  const search = searchField ? { [searchField]: new RegExp(searchString) } : undefined;
  const sort = sortField ? { [sortField]: sortDirectionValues[sortDirection] } : undefined;

  const query = model.find(search)
  query.limit(parseInt(pageSize));
  query.skip((page - 1) * parseInt(pageSize));

  if (sort) {
    query.sort(sort)
  }

  const count = model.count(search);

  try {
    const users = await query.exec();
    const totalResults = await count.exec();

    const response = { pageSize, page,searchString, searchField, sortField,
      sortDirection, data: users, totalResults };

    res.json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

export const standardPersist = async (entityIdParam, model, req, res) => {
  const { body: entity, params: { [entityIdParam]: entityId } } = req;

  try {
    let persistedEntity;

    if (entityId) {
      persistedEntity = await model.findByIdAndUpdate(entityId,
        { $set: entity }, { new: true });
    } else {
      persistedEntity = await model.create(entity);
    }

    res.json({ data: persistedEntity });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
}

export const standardSingleQuery = async (entityIdParam, model, req, res) => {

  const { params: { [entityIdParam]: entityId } } = req;

  try {
    const entity = await model.findById(entityId);
    res.json({ data: entity });
  } catch (error) {
    console.error(error);
    res.status(500).json(error);
  }
}

