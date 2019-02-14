/**
 * This file is part of savant-ide.
 * Copyright (c) 2018 - present Zilliqa Research Pte. Ltd.
 *
 * savant-ide is free software: you can redistribute it and/or modify it under the
 * terms of the GNU General Public License as published by the Free Software
 * Foundation, either version 3 of the License, or (at your option) any later
 * version.
 *
 * savant-ide is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE.  See the GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * savant-ide.  If not, see <http://www.gnu.org/licenses/>.
 */

import { DB, ObjectStore, Transaction } from 'idb';

export interface KVStore<K = string, V = any> {
  name: string;
  db: Promise<DB>;
  tx(): Promise<[Transaction, ObjectStore<V, K>]>;
  get(key: K): Promise<V>;
  getAll(): Promise<V[]>;
  set(key: K, val: V): ReturnType<ObjectStore<V, K>['put']>;
  delete(key: K): Promise<void>;
  clear(): Promise<void>;
  keys(): Promise<K[]>;
}
